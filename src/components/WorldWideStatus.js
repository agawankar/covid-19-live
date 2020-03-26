import React from 'react'
import { formatDistanceToNow, format } from 'date-fns';
import useRetrive from '../services/useRetrive';
import TrackCard from './TrackCard';

const WorldWideStatus = () => {
    const [data, loading] = useRetrive('https://covid19.mathdro.id/api');
    
    return (
      <>
        <h2 className="my-3 text-2xl">World Wide Live Update</h2>

        {!loading && (
          <div className="flex sx-2 sm:sx-5">
            <TrackCard title="Confirmed Cases" value={data.confirmed.value} />
            <TrackCard
              title="Recovered Cases"
              value={data?.recovered.value}
            />
            <TrackCard
              title="Death Cases"
              value={data.deaths.value}
            />
          </div>
        )}

        <div className="mt-3 text-center text-muted text-center">
          <span>Last updated: </span>
          {data?.lastUpdate && (
            <>
              <span>{format(new Date(data?.lastUpdate), "MM/dd/yyyy @ hh:mma")} </span>
              <span>({formatDistanceToNow(new Date(data?.lastUpdate))}}</span>
            </>
          )}
        </div>
      </>
    )
}

export default WorldWideStatus

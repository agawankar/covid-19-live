import React from 'react'

const TrackCard = ({ title, value, className }) => {
    return (
        <div className={`StatCard neumorph shadow-neumorph-inset p-4 flex-1 hover:shadow-neumorph-outset ${className}`}>
            <h1 className="text-md sm:text-xl md:text-3xl font-bold">{value?.toLocaleString() || 'Loading..' }</h1>
            <h2 className="md:text-base sm:text-sm text-xs text-accent font-bold uppercase break-normal">{ title }</h2>
        </div>
    )
}

export default TrackCard

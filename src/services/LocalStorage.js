import { useState } from "react"

export const LocalStorage = (key, initialValue) => {
    const [_value, _setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })
    
    const setValue = (value) => {
        try {
            _setValue(value)
            
            window.localStorage.setItem(
                key,
                JSON.stringify(value)
            )
        } catch (error) {
            
        }
    }

    return [
        _value,
        setValue
    ]
}
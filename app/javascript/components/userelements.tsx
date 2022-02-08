import React, { useState } from 'react';

interface userElementsProps {
  id: string
  type: string
  label: string
}

export type MapData = NodeData[]

const userElements = ({id, type, label,}:userElementsProps):React.ReactElement => {
  const [mapData, setMapData] = React.useState<MapData>([])

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/nodes.json?user_id=${userID}`)
      const json = await response.json()
      setMapData(json)
    }

    fetchData()
    const interval = setInterval(() => fetchData(), 1000 * 60)
    return () => clearInterval(interval)
  }, [])

}

export default userElements

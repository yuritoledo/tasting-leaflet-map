import { FC, useState } from 'react'
import { Rectangle, Tooltip } from 'react-leaflet'
import { Feature } from '../interfaces'

interface Props {
  item: Feature
}

const FeatureItem: FC<Props> = (props) => {
  const { item } = props
  const { geometry, properties } = item
  const [hoveredElementId, setHoveredElementId] = useState('')

  const isHoveredElement = hoveredElementId === properties.uuid

  const color = isHoveredElement ? '#000000' : properties.color

  return (
    <Rectangle
      key={properties.uuid}
      bounds={geometry.coordinates}
      pathOptions={{ color }}
      bubblingMouseEvents
      interactive
      eventHandlers={{
        mouseover: () => setHoveredElementId(properties.uuid),
        mouseout: () => setHoveredElementId(''),
      }}
    >
      <Tooltip
        opacity={1}
        direction="bottom"
      >
        <p>
          Length:
          {' '}
          {properties.info.length}
        </p>
        <p>
          Diameter:
          {' '}
          {properties.info.diameter}
        </p>
      </Tooltip>
    </Rectangle>
  )
}

export default FeatureItem

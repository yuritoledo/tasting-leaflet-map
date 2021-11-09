import {
  useEffect, useMemo, useState,
} from 'react'
import {
  MapContainer, TileLayer,
} from 'react-leaflet'
import Button from '../../components/Button'
import FeatureItem from '../../components/FeatureItem'
import { Feature } from '../../interfaces'
import { getMapViewService } from '../../services/mapview'
import { defaultColor } from '../../styles/colors'
import Container from '../../components/Container'

const Map = () => {
  const [originalFeaturesList, setOriginalFeaturesList] = useState<Feature[]>([])
  const [isShowingDefaultColor, setIsShowingDefaultColor] = useState(true)

  const features = useMemo(() => {
    if (isShowingDefaultColor) {
      const remapToDefaultColor = (feature: Feature) => ({
        ...feature,
        properties: { ...feature.properties, color: defaultColor },
      })

      return originalFeaturesList.map(remapToDefaultColor)
    }

    return originalFeaturesList
  }, [originalFeaturesList, isShowingDefaultColor])

  useEffect(() => {
    const getMapData = async () => {
      const data = await getMapViewService()
      if (!data) return
      setOriginalFeaturesList(data.slice(0, 50))
    }
    getMapData()
  }, [])

  const onClickSwitchColor = () => {
    setIsShowingDefaultColor(!isShowingDefaultColor)
  }

  const buttonTitle = isShowingDefaultColor ? 'Default color' : 'Original color'

  return (
    <Container>
      <Button onClick={onClickSwitchColor}>{buttonTitle}</Button>
      <MapContainer center={[8.5361854, 12.0036249]} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {features.map((item) => (
          <FeatureItem key={item.properties.uuid} item={item} />
        ))}

      </MapContainer>
    </Container>
  )
}

export default Map

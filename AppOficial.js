import { FlatList, View, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper'

export default function App(){
  const produtos = [
    {
      id: 1,
      nome: 'Mouse Gamer RGB',
      preco: 'R$ 120,00',
      descricao: 'Mouse com sensor óptico de alta precisão',
      imagem: ''
    },
    {
      id: 2,
      nome: 'Teclado Mecanico',
      preco: 'R$ 280,00',
      descricao: 'Teclado com switches azuis e iluminação LED',
      imagem: ''
    },
    {
      id: 3,
      nome: 'Monitor 24" Full HD',
      preco: 'R$ 950,00',
      descricao: 'Tela IPS com 75Hz e bordas finas',
      imagem: ''
    },
    {
      id: 4,
      nome: 'Notebook Lenovo',
      preco: 'R$ 3.200,00',
      descricao: 'Core i5, 8GB RAM, SSD 512GB',
      imagem: ''
    }
  ]

  const renderItem = ({item}) => (
    <Card>
      <Card.Cover source={{uri: item.imagem}}  />
      <Card.Title title={item.nome} subtitle={item.descricao}/>
      <Card.Content>
        <Text>{item.preco}</Text>
      </Card.Content>
    </Card>
  )

  return(
    <View>
      <FlatList 
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}


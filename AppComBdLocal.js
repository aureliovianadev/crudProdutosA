import { FlatList, View, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper'

export default function AppComBdLocal(){
  const produtos = [
    {
      id: 1,
      nome: 'Mouse Gamer RGB',
      preco: 'R$ 120,00',
      descricao: 'Mouse com sensor óptico de alta precisão',
      imagem: 'https://cdn.pixabay.com/photo/2014/03/20/00/00/computer-mouse-290950_1280.jpg'
    },
    {
      id: 2,
      nome: 'Teclado Mecanico',
      preco: 'R$ 280,00',
      descricao: 'Teclado com switches azuis e iluminação LED',
      imagem: 'https://cdn.pixabay.com/photo/2018/09/29/15/08/typewriter-3711590_1280.jpg'
    },
    {
      id: 3,
      nome: 'Monitor 24" Full HD',
      preco: 'R$ 950,00',
      descricao: 'Tela IPS com 75Hz e bordas finas',
      imagem: 'https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_1280.jpg'
    },
    {
      id: 4,
      nome: 'Notebook Lenovo',
      preco: 'R$ 3.200,00',
      descricao: 'Core i5, 8GB RAM, SSD 512GB',
      imagem: 'https://cdn.pixabay.com/photo/2016/02/19/11/30/pc-1209746_1280.png'
    }
  ]

  const renderItem = ({item}) => (
    <Card style={styles.card}>
      <Card.Cover source={{uri: item.imagem}}  />
      <Card.Title title={item.nome} subtitle={item.descricao}/>
      <Card.Content>
        <Text style={styles.preco}>{item.preco}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  card: {
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3
  },
  preco: {
    marginTop: 8,
    fontWeight: 'bold'
  }
})




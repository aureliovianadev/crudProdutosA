import { Activity, useEffect, useState } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import axios from 'axios'
import { ActivityIndicator, Card, Text } from 'react-native-paper'

export default function App() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

  const API_URL = 'https://691bc2803aaeed735c8e2d4f.mockapi.io/produtos/api/v1/produto'

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setProdutos(response.data)

      })

      .catch(error => {
        console.log('Erro ao Buscar os Produtos', error)
      })

      .finally(() => {
        setLoading(false)
      })
  })








  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.imagem }} />
      <Card.Title title={item.nome} subtitle={item.descricao} />
      <Card.Content>
        <Text style={styles.preco}>{item.preco}</Text>
      </Card.Content>
    </Card>
  )

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      )}
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




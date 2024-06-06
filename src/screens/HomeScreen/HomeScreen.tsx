import React from 'react'
import { ListRenderItem, View } from 'react-native'
import { Text } from 'react-native-paper'
import { styles } from '../../theme/styles'
import { FlatList } from 'react-native-gesture-handler';

interface Products {
    name: string;
    price: number;
}

const products: Products[] = [
    { name: 'mouse', price: 50 },
    { name: 'laptop', price: 1500 },
    { name: 'teclado', price: 80 },
    { name: 'monitor', price: 120 }
];

const calculateTotalPrice = (items: Products[]) => {
    return items.reduce((total, item) => total + item.price, 0);
};

export const HomeScreen = () => {

    const renderItem: ListRenderItem<Products> = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Nombre: {item.name}</Text>
            <Text style={styles.itemText}>Precio: ${item.price}</Text>
        </View>
    );

    const totalPrice = calculateTotalPrice(products);

    return (
        
        <View style={styles.rootHome}>
            <View style={styles.headerHome}>
                <Text variant='displaySmall'>Productos</Text>
            </View>
            <View>
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.listContent}
                />
            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total a pagar: ${totalPrice}</Text>
            </View>
        </View>
    )
}

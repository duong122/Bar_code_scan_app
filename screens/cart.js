import React from "react";
import {Text, View, Image, FlatList} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity} from "react-native";

const NumberChanger = () => {
    return(
        <View style={styles.numberChangerContainer}>
            <Image source={require('../assets/smallMinus.png')} style={styles.minus}/>
            <Text style={styles.quantity}> 2 </Text>
            <Image source={require('../assets/smallPlus.png')} style={styles.plus}/>
        </View>
    )
} 

const Render = ({ item }) => {
    return(
        <View style={styles.productContainer}>
            <Image source={item.uri} style={styles.ImageProduct}/>
            <View style={styles.textContainer}>
                <Text style={styles.peopleName}> {item.text1} </Text>
                <Text style={styles.productname}> {item.text2} </Text>
                <Text style={styles.price}> {item.text3} </Text>
            </View>
            <NumberChanger/>
        </View>
    )
}

export default function Cart( {navigation}) {
    return(
        <View style={styles.container}>
             <View style={styles.subContainer}>
                <View style={styles.headerPart}>
                        <TouchableOpacity style={styles.backButton}>
                            <Image source={require('../assets/Arrow2.png')} style={styles.arrowImage}/>
                        </TouchableOpacity>
                    </View>

                <View style={styles.middlePart}>
                    <View style={styles.title}>
                        <Text style={styles.text}>Your Cart 👍🏻</Text>
                    </View>
                     
                     <View style={styles.productList}>
                        <FlatList
                            data={data}
                            renderItem={({item, data}) => <Render item={item}/>}
                        />
                     </View>
                </View>

                <View style={styles.bottomPart}>
                    <View style={styles.totalContainer}>
                        <Text style={{
                            fontWeight: '700',
                            fontSize: 18,
                            color: '#363636',
                        }}> Total </Text>
                        <Text style={{
                            fontSize: '700',
                            fontSize: 20,
                            color: '#F08F5F',
                        }}> ₹ 1,527 </Text>
                    </View>

                    <View style={styles.btnCheckOutContainer}>
                        <TouchableOpacity style={styles.btncheckOut}>
                            <Text style={styles.textCheckOut}> Proceed to checkout </Text>
                        </TouchableOpacity>
                    </View>
                </View>
             </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    subContainer: {
        marginVertical: '18%',
        marginHorizontal: '8%',
    },
    headerPart: {
        height: '13%',
        width: '100%',
    },
    backButton: {
        width: 44,
        height: 44,
        background:  '#F8F8FB',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middlePart: {
        width: '100%',
        height: '70%',
        marginHorizontal: 12,
    },
    text: {
        fontWeight: '700',
        fontSize: 22,
    },
    productList: {
        width: '100%',
        marginTop: 30,
    },
    productContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 90,
        marginBottom: 20,
        alignItems: 'center',
    },
    numberChangerContainer: {
        flexDirection: 'row',
        width: 100,
        marginTop: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    ImageProduct: {
        marginRight: 25,
        width: 60,
        height: 60,
    },
    peopleName: {
        fontWeight: '400',
        fontSize: 12,
        color: '#B1B1B1',
    },
    productname: {
        fontWeight: '400',
        fontSize: 15,
        color:  '#494949',
        marginVertical: 4,
    },
    price: {
        fontWeight: '700',
        fontSize: 18,
        color: '#F08F5F'
    },
    textContainer: {
        width: '40%'
    },
    quantity: {
        marginHorizontal: 8,
    },
    bottomPart: {
        width: '100%',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    btncheckOut: {
        width: '90%',
        height: 50,
        backgroundColor: '#F08F5F',
        borderRadius: 20,
        justifyContent:'center',
        alignItems: 'center',
    },
    btnCheckOutContainer: {
       width: '100%',
        alignItems: 'center'
    },
    textCheckOut: {
        fontWeight: '700',
        fontSize: 18,
        color: '#fff',
    },
});

const data = [
    {
        key: 1,
        text1: 'Lauren’s',
        text2: 'Orange juice',
        text3: '₹ 149',
        uri: require('../assets/productImage.png')
    },
    {
        key: 2,
        text1: 'Baskin’s',
        text2: 'Skimmed Milk',
        text3: '₹ 129',
        uri: require('../assets/product2.png'),
    },
    {
        key: 3,
        text1: 'Marley’s',
        text2: 'Aloe Vera Lotion',
        text3: '₹ 1249',
        uri: require('../assets/product3.png'),
    },
]
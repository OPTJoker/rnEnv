import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

interface IState {
    dataList: any[]
}

export default class RootPage extends React.PureComponent<{}, IState> {
    constructor(p: any) {
        super(p);
        this.state = {
            dataList: this.getData()
        };
    }


    listItem = (item: any) => {
        const s1 = 'https://alp.alicdn.com/1636750040202-2200-220.png';
        const s2 = 'https://alp.alicdn.com/1630682113622-2100-220.png';
        const uri = Math.floor(item.item)%2 === 0 ? s1 : s2;

        return (
            <View style={styles.cell}>
                <Image style={styles.cellImg} source={{uri}} />
            </View>
        )
    }

    getData = () => {
        const res = [];
        for (let i=0; i< 200; i++) {
            const t = String(Math.random() * 10);
            res.push(t);
        }
        return res;
    }

    onRemove = () => {
        this.setState({
            dataList: []
        });
    }

    onShowImg = () => {
        this.setState({
            dataList: this.getData()
        });
    }

    render(){
        return (
            <View style={styles.bgView}>
                <View style={styles.nav}>
                    <TouchableOpacity
                        onPressIn={this.onRemove}
                        style={styles.navBtn}
                    >
                        <Text style={styles.navBtnText}>移除图片</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onShowImg}
                        style={styles.navBtn}
                    >
                        <Text style={styles.navBtnText}>加载图片</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    ItemSeparatorComponent={CellSeprator}
                    renderItem={this.listItem}
                    data={this.state.dataList}
                >

                </FlatList>
                
            </View>
        );
    };
}


class CellSeprator extends React.PureComponent<{}> {
    constructor(p: any) {
        super(p);
    }

    render() {
        return (
            <View style={styles.cellSep}></View>
        )
    }
}

const styles = StyleSheet.create({
    
    bgView: {
        width: '100%',
        height: '100%',
        flexDirection: 'column'
    },
    nav: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
        backgroundColor: '#38D',
        width: '100%',
        height: 88,
        paddingBottom: 4
        
    },
    navBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#fff',
        minHeight: 40,
        minWidth: 80
    },
    navBtnText: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'PingFangSC-Medium'
    },
    list: {
        width: '100%'
    },
    cell: {
        flex: 1,
        minHeight: 44,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 10
    },
    cellSep: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        marginHorizontal: 8,
        backgroundColor: '#99b'
    },
    cellImg: {
        height: 80,
        flex: 1
    },
    title: {
        fontSize: 20,
        color: '#89f'
    }
})

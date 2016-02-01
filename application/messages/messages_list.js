import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import React, {
  ScrollView,
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  ListView,
  Image,
  TouchableOpacity,
  Navigator,
  Dimensions,
  NativeModules,
} from 'react-native';

class MessagesList extends React.Component{
  _renderRow(rowData){
    console.log('DATA', rowData);
    return (
      <TouchableOpacity onPress={()=>{
        this.props.navigator.push({
          name: 'Message',
          message: rowData,
        })
      }}>
        <View style={styles.messageContainer}>
          <Image style={styles.profile} source={{uri: rowData.profileUrl}}/>
          <View style={styles.messageTextContainer}>
            <View style={styles.fromContainer}>
              <Text style={styles.fromText}>{rowData.from}</Text>
              <Text style={styles.sentText}>{moment(rowData.sent).fromNow()}</Text>
            </View>
            <Text style={styles.messageText}>{rowData.message}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Messages</Text>
        </View>
        <ListView
          dataSource={this.props.dataSource}
          contentInset={{bottom: 49}}
          automaticallyAdjustContentInsets={false}
          ref="messagesList"
          renderRow={this._renderRow.bind(this)}
        />
      </View>
    )
  }
}

let styles = {
  sentText:{
    fontSize: 14,
    padding: 10,
    marginRight: 15,
    fontWeight: '300',
  },
  fromContainer:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fromText:{
    fontSize: 16,
    fontWeight: '500',
  },
  messageTextContainer:{
    flex: 1,
  },
  messageText:{
    fontSize: 18,
    fontWeight: '300',
    paddingHorizontal: 15,
  },
  messageContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile:{
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 10,
    marginVertical: 10,
  },

  container: {
    flex: 1,
  },
  header: {
    height: 70,
    backgroundColor: Colors.brandPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 22,
  },
}

module.exports = MessagesList;

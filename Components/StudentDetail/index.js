import React, { Component , Fragment} from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../Store/actions";
import { TextInput } from "react-native";
import ItemList from "../ItemList";
// NativeBase Components
import {
  Text,
  Button,
  Left,
  Body,
  Right,
  View,
  ListItem,
  Picker,
  Content,
  Spinner,
  Input,
  Card,
  CardItem,
  Thumbnail,
  Icon,
  Row,
  Col,Tab, Tabs, ScrollableTab, H1
} from "native-base";
import Overlay from 'react-native-modal-overlay';
import CategoryRItem from "./CategoryRItem"
import {LinearGradient} from 'expo';
class StudentDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("student").name,
      headerRight: <Thumbnail style={{marginRight:10}} source={{ uri: navigation.getParam("student").image }} />,
      headerStyle:{height:80,},
      headerTitleStyle:{fontSize:20},
    };
  };
  async componentDidMount() {
    let studentORder = this.props.navigation.getParam("student");
    if (studentORder.orders) {
      let OrderHistory = studentORder.orders.filter(order => order.paid);
      this.props.saveOrderHistory(OrderHistory);
    }
    
  }
  state = {
    limit: null,
    modalVisible: false, 
  };
  
  onClose = () => this.setState({ modalVisible: false});
  render() {
    let student = this.props.navigation.getParam("student");
    let CategoriesList = [];
    CategoriesList = student.school.items.map(item => item.category.name);
    let itemsCategories;
    let newCategoriesList = CategoriesList.filter(
      (v, i, a) => a.indexOf(v) === i
    );
    let Tap = newCategoriesList.map(category => 
          <Tab heading={category} key={`${student.id} ${category}`}>
            <ItemList  student={student} items={student.school.items.filter(item=> item.category.name === category)} />
          </Tab>
    )
    return (
    <LinearGradient
      colors={['#72B7E2', '#AE8BF1', '#3DDDD5']}
      style={{ width:"100%", height:"100%"}}>  
      <Content>
        <Card transparent style={{ flex: 0 }}>
          <CardItem style={{marginHorizontal:10, marginVertical:20, backgroundColor:"rgba(255, 255, 255,0.4)"}}>
            <Body/>
            <Right>
              <Text style={{fontSize:20}}>{`${student.name} في ${student.grade}`}</Text>
            </Right>
          </CardItem>
          <CardItem style={{marginHorizontal:10, backgroundColor:"rgba(255, 255, 255,0.4)"}}>
            <Left>
              <Icon name="pencil-square-o" type="FontAwesome" onPress={() => this.setState({modalVisible:true})}/>
            </Left>
            <Right>
            <Text>{`الحد اليومي ${student.limit === 1 ? "ريال" : student.limit === 2 ? "ريالين" : `${student.limit} ريالات`} `}</Text>
            </Right>
          </CardItem>
          <View style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'row', marginTop:10, marginBottom:20}}>
            <H1> قائمة الاطعمة الممنوعة</H1>
          </View>
          <Tabs transparent renderTabBar={()=> <ScrollableTab />}>
            {Tap}
          </Tabs>
          <View style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'row',}}>
              <Button
                style={{marginTop:10}}
                onPress={() =>
                  this.props.notAlowedItems(
                    this.props.checkedItems,
                    student.id
                  )
                }
              >
                <Text>أمنع عن أبني</Text>
              </Button>
          </View>
        </Card>
        <Button
          full
          onPress={() =>this.props.navigation.navigate("StudentOrderHistory")}>
          <Text>طلبات {student.name}</Text>
        </Button>
        <Overlay 
        visible={this.state.modalVisible} onClose={this.onClose} closeOnTouchOutside
        animationType="zoomIn" containerStyle={{backgroundColor: 'rgba(114, 183, 226,0.78)'}}
        childrenWrapperStyle={{backgroundColor: '#eee'}}
        animationDuration={500}>
        {
          (hideModal, overlayState) => (
            <Fragment>
               <Row style={{height:50}}>
                  <TextInput
                      style={{
                        width: 90,
                        height: 40,
                        borderColor: "gray",
                        borderWidth: 1,
                        marginTop:3,
                        marginRight:5,
                        textAlign: 'right'
                      }}
                      value={this.state.limit}
                      onChangeText={limit => this.setState({ limit })}
                      placeholder={"ادخل المبلغ"}
                    />
                  <Button onPress={() => {
                              this.props.updateStudentLimit(student, this.state.limit);
                              this.setState({ state: this.state, modalVisible:false});
                            }}>
                      <Text>تم</Text>
                    </Button>
               </Row>
            </Fragment>
          )
        }
      </Overlay>
      </Content>
    </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.ParentReducer.loading,
    parent: state.ParentReducer.parent,
    checkedItems : state.ParentReducer.checkedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    notAlowedItems: (items, student) =>
    dispatch(actionCreators.notAlowedItems(items, student)),
    fetchParentProfile: () => dispatch(actionCreators.fetchParentProfile()),
    updateStudentLimit: (studentDate, limit) =>
      dispatch(actionCreators.updateStudentLimit(studentDate, limit)),
    saveOrderHistory: OrderHistory =>
      dispatch(actionCreators.saveOrderHistory(OrderHistory)),
    fetchNotAlowedItems: items =>
      dispatch(actionCreators.fetchNotAlowedItems(items))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetail);

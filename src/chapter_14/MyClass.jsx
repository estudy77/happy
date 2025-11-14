class MyClass extendes React.Component {
  componentDidMount() {
    let value = this.Context;
    /* MyContext의 값을 이용하여 원하는 작업을 수행 가능 */
  }
  componentDidUpdate() {
    let value = this.Context;
  }
  componentWillUnmount() {
    let value = this.Context;
  }
  render() {
    let value = this.Context;
    /* MyContext의 값에 따라서 컴포넌트들을 렌더링 */
  }
} 
MyClass.contextType = MyContext;
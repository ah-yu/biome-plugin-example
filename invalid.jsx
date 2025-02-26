class Foo extends React.Component {
    render() {
        return <div ref={ref => { this.c = ref }} />;
    }
}

let foo = <button type="button" onKeyDown={() => {}}/>
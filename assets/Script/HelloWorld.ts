@cc.RegisterComponent
class HelloWorld extends cc.Component {
    @cc.Property(cc.Label)
    label: cc.Label;

    @cc.Property('Hello World.')
    text: string;

    onLoad() {
        this.label.string = this.text;
    }
}
export default function ChildrenPropsComponent(props) {
    return(
        <div>
            <h1>Children Prop </h1>
            {props.children}
        </div>
    );
}
export default function CategoriesCard(props) {
    return (
        <div className="hidden md:flex md:w-1/6">
            {props.children}
        </div>
    );
}
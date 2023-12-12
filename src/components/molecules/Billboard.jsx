export default function Billboard(props) {
    return (
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-5 md:w-11/12">
            {props.children}
        </div>
    );
}
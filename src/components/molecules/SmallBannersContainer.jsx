export default function SmallBannersContainer(props) {
    return (
        <div className="flex flex-row space-x-2 md:space-x-0 md:flex-col md:space-y-2 md:w-1/4">
            {props.children}
        </div>
    );
}
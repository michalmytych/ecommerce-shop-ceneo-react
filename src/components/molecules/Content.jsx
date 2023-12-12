export default function Content(props) {
    return (
        <div className="flex flex-col space-y-2 lg:max-w-[1300px] xl:max-w-[1600px]">
        {props.children}
        </div>
    );
}
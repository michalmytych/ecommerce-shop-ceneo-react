export default function Layout(props) {
  return (
    <div className="flex flex-col mx-auto md:flex-row md:space-x-24 md:px-12 md:mt-5 lg:max-w-[1300px] xl:max-w-[1600px]">
      {props.children}
    </div>
  );
}

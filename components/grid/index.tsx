export const Container = (props) => <div className={`mx-auto container px-4 ${props.className}`}>{props.children}</div>;

export const Row = (props) => <div className={`flex relative w-full ${props.className}`}>{props.children}</div>;

export const Column = (props) => <div className={`flex flex-col ${props.className}`}>{props.children}</div>;

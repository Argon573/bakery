const Container = ({ children, className = "", maxWidth = "max-w-7xl" }) => {
    return (
        <div className={`w-full ${maxWidth} mx-auto px-5 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};

export default Container;

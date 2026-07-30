import { isRouteErrorResponse, useRouteError } from "react-router"

const ErrorComponent = () => {
    let error = useRouteError()
    if (isRouteErrorResponse(error)) {
        return (
            <>
                <h1>
                    {error.status} {error.statusText}
                </h1>
                <p>{error.data}</p>
            </>
        );
    } else if (error instanceof Error) {
        return (
            <div className="w-full min-h-screen flex justify-center items-center bg-red-500">
                <div >
                    <h1 className="text-9xl text-center">Error</h1>
                    <p className="text-7xl font-semibold text-center">{error.message}</p>
                    {/* <p>The stack trace is:</p> */}
                    {/* <p>{error.stack}</p> */}
                </div>
            </div>
        );
    } else {
        return <h1>Unknown Error</h1>;
    }
}

export default ErrorComponent
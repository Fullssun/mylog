export default async function postData<TData extends object, TResponse>(
    url: string,
    data: TData
): Promise<TResponse> {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await res.json();
    return result as Promise<TResponse>
}
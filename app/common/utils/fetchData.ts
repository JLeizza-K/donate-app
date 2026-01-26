import * as v from "valibot";

export async function fetchData<TResponse, TData>(
	url: string,
	responseSchema: v.BaseSchema<unknown, TResponse, v.BaseIssue<unknown>>,
	schema: v.BaseSchema<unknown, TData, v.BaseIssue<unknown>>,
	key: keyof TResponse,
): Promise<TData> {
	const response = await fetch(url);

	if (!response) {
		throw new Error("Didn't connect to the route");
	}
	const data = v.parse(responseSchema, await response.json());
	const validData = v.parse(schema, data[key]);
	return validData;
}

import { useEffect, useState } from 'react'

export function useOneWayDependencyState<T>(
	val: T
): [value: T, setValue: (val: T) => void, isDirty: boolean] {
	const [state, setState] = useState<T>(val)
	useEffect(() => {
		setState(val)
	}, [val])
	return [state, setState, state !== val]
}

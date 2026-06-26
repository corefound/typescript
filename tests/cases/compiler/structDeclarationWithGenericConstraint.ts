struct FixedArray<T, N extends number> {
    layout(): ArrayLayout<T> {
        return {
            element: T,
            length: N,
            storage: "inline"
        };
    }
}

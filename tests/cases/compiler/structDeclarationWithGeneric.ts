struct Pointer<T> {
    layout(): PointerLayout<T> {
        return {
            to: T,
            mutable: true,
            nullable: false
        };
    }
}

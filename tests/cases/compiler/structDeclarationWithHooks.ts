struct int8 extends number {
    layout(): IntegerLayout {
        return {
            bits: 8,
            signed: true
        };
    }

    validate(): boolean {
        return this.value >= -128 && this.value <= 127;
    }
}

// Strict Equals 严格等于扩展
class SEQ {
    getInfo() {
        return {
            id: 'seq',
            name: '严格等于',
            blocks: [
                {
                    opcode: 'SEQ',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[str1] == [str2]',
                    arguments: {
                        str1: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'AaaBBcc'
                        },
                        str2: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'aAAbbCC'
                        }
                    }
                }
            ]
        };
    }
    SEQ(args) {
        return (args.str1 == args.str2);
    };
}
Scratch.extensions.register(new SEQ());
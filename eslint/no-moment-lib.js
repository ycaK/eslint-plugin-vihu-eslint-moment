// @ts-check
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  create(context) {
    return {
      Identifier: function (node) {
        if (node.parent.type === "ImportDefaultSpecifier") {
          if (node.parent.parent.source.value === "moment")
            context.report({
              node,
              message: "Use of moment library is forbidden.",
            });
        }
      },
    };
  },
};
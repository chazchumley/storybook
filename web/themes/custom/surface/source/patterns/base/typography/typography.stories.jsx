import typography from "./typography.twig";
import data from "./typography.yml";

const settings = {
	title: "Base/Typography",
};

export const Typography = {
	render: (args) => typography(args),
	args: { ...data },
};

export default settings;

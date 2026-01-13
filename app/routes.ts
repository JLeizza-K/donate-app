import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("foundations", "routes/foundations.tsx"),
    	route("projects", "routes/projects.tsx"),
] satisfies RouteConfig;

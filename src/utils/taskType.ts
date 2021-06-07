interface Task {
	id: string;
	name: string;
	description?: string;
	done: boolean;
	timestamp: number;
}

export default Task;

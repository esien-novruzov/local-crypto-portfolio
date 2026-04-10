import { Input } from "@chakra-ui/react/input";

export default function AddTransaction() {
    return <>
        <Input
            placeholder="Search symbol..."
            variant="outline"
            size="sm"
            _placeholder={{ color: "gray.400" }}
        />
    </>
}
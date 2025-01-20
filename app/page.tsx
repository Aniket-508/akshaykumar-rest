import Main from "@/components/main";
import { getRandomHttpCode } from "@/lib/httpcodes";

export default function Page() {
  const initialCode = getRandomHttpCode();

  return <Main initialCode={initialCode} />;
}

import { format as $format } from "date-fns";
import { it } from "date-fns/locale";

const format = (date, format) => {
  return $format(date, format, { locale: it });
};
export default {
  methods: {
    format,
  },
};

export default function UseHandleSubmit(search, resault, setResault) {
  const searchResault =
    search != ""
      ? resault.filter((el) =>
          el.name.toLowerCase().trim().includes(search.toLowerCase().trim())
        )
      : resault;
  return setResault(searchResault);
}

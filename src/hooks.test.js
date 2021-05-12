import { renderHook, act } from "@testing-library/react-hooks";
import { useFetchBooks } from "./hooks";

test("should create correct state from fetch API call", async () => {
    const promise = Promise.resolve({json: () => {} });
    window.fetch = jest.fn().mockImplementationOnce(() => promise );
    const {result} = renderHook(() => useFetchBooks(1, 10, "smith", { count: 0, books:[]}));

      act(() => {
        expect(fetch).toHaveBeenCalledWith(
            "//nyx.vima.ekt.gr:3000/api/books",
            {
              "body": "{" +
                  "\"page\":1,\"itemsPerPage\":10,\"filters\":[{\"type\":\"all\",\"values\":[\"smith\"]}]}",
                    "headers": {"Content-Type": "application/json"
                    },
              "method": "POST"
            }
        );

        expect(result.all[0]).toEqual([{"books": [],"count": 0}, true]);
      });

      await act(()=>promise);
})

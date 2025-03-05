"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

interface CustomPaginationProps {
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export function CustomPagination(props: CustomPaginationProps) {
  const { currentPage, totalPages, hasNextPage, hasPreviousPage } = props;
  const searchParams = useSearchParams();
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // Always show the first page
        i === totalPages || // Always show the last page
        (i >= currentPage - maxVisiblePages &&
          i <= currentPage + maxVisiblePages) // Show nearby pages
      ) {
        pages.push(i);
      } else if (
        i === currentPage - maxVisiblePages - 1 ||
        i === currentPage + maxVisiblePages + 1
      ) {
        pages.push("ellipsis");
      }
    }
    return pages;
  };

  const getUpdatedSearchParams = (page: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", page);
    return newSearchParams.toString();
  };

  const pageNumbers = getPageNumbers();
  return (
    <Pagination>
      <PaginationContent>
        {hasPreviousPage && (
          <PaginationItem>
            <PaginationPrevious
              href={
                "?" + getUpdatedSearchParams(Number(currentPage - 1).toString())
              }
            />
          </PaginationItem>
        )}
        {pageNumbers.map((page, index) =>
          page === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                href={"?" + getUpdatedSearchParams(page.toString())}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {hasNextPage && (
          <PaginationItem>
            <PaginationNext
              href={
                "?" + getUpdatedSearchParams(Number(currentPage + 1).toString())
              }
            ></PaginationNext>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}

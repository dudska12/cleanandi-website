/** JSON-LD 구조화 데이터를 <script> 로 렌더링하는 공용 컴포넌트 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // 구조화 데이터는 정적으로 생성되므로 XSS 위험 없음
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

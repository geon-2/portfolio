import { describe, expect, it } from 'vitest';
import { portfolioNarrative } from '../src/lib/profile';
import { getProjectBySlug } from '../src/lib/projects';

describe('portfolio messaging', () => {
  it('positions Geon as a product-minded engineer rather than a generic full-stack generalist', () => {
    expect(portfolioNarrative.heroTitle).toContain('운영 가능한 서비스 구조');
    expect(portfolioNarrative.heroTitle).toContain('Software Engineer');
    expect(portfolioNarrative.about.join(' ')).toContain('기능 구현만으로는 충분하지 않다는 점');
    expect(portfolioNarrative.about.join(' ')).toContain('프론트엔드와 서버가 어떤 책임을 나누어야 하는지');
  });

  it('keeps AI as an expansion axis grounded in product experience', () => {
    expect(portfolioNarrative.about.join(' ')).toContain('AI 기능이 실제 사용자 경험과 제품 구조 안에서 안정적으로 동작');
    expect(portfolioNarrative.heroTitle).not.toContain('AI Engineer');
  });

  it('keeps Snaplink broader than an analytics refactor project', () => {
    const snaplink = getProjectBySlug('snaplink');

    expect(snaplink?.challenge).toContain('모바일 앱, 랜딩페이지, 관리자 페이지를 동시에 개발');
    expect(snaplink?.challenge).toContain('실제 앱스토어 출시');
    expect(snaplink?.solution.join(' ')).toContain('Analytics');
  });
});

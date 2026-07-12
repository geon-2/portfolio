import { describe, expect, it } from 'vitest';
import { contacts, portfolioNarrative } from '../src/lib/profile';
import { getProjectBySlug } from '../src/lib/projects';

describe('portfolio messaging', () => {
  it('positions Geon as a product-minded engineer rather than a generic full-stack generalist', () => {
    expect(portfolioNarrative.heroTitle).toContain('운영 가능한 서비스 구조');
    expect(portfolioNarrative.heroTitle).toContain('Software Engineer');
    expect(portfolioNarrative.heroDescription).toContain('인증 상태');
    expect(portfolioNarrative.about.join(' ')).toContain('제품의 안정성은 화면 구현만으로 만들어지지 않는다는 것');
    expect(portfolioNarrative.about.join(' ')).toContain('회원가입·로그인, 인증 상태 유지, 딥링크 유입');
  });

  it('keeps AI as an expansion axis grounded in product experience', () => {
    expect(portfolioNarrative.about.join(' ')).toContain('AI 기능이 사용자 입력, 분석 요청, 대기 경험, 서버 구조 안에서 안정적으로 동작');
    expect(portfolioNarrative.heroTitle).not.toContain('AI Engineer');
  });

  it('avoids leading with studying or generic growth wording in the top narrative', () => {
    const topNarrative = [portfolioNarrative.heroDescription, ...portfolioNarrative.about].join(' ');

    expect(topNarrative).not.toContain('공부');
    expect(topNarrative).not.toContain('역량을 확장');
    expect(topNarrative).not.toContain('성장하고 있습니다');
  });

  it('keeps Snaplink broader than an analytics refactor project', () => {
    const snaplink = getProjectBySlug('snaplink');

    expect(snaplink?.challenge).toContain('모바일 앱, 랜딩페이지, 관리자 페이지를 동시에 개발');
    expect(snaplink?.challenge).toContain('실제 앱스토어 출시');
    expect(snaplink?.solution.join(' ')).toContain('Analytics');
  });

  it('uses public portfolio contact channels without exposing a phone number', () => {
    expect(contacts.map((contact) => contact.label)).toEqual(['Email', 'GitHub', 'LinkedIn', 'Velog']);
    expect(contacts.find((contact) => contact.label === 'Email')?.href).toBe('mailto:gunle0416@gmail.com');
    expect(contacts.map((contact) => contact.value).join(' ')).not.toContain('010-');
  });
});

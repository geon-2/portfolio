import { describe, expect, it } from 'vitest';
import { featuredProjects, getProjectBySlug } from '../src/lib/projects';

describe('portfolio project data', () => {
  it('has the three featured projects in priority order', () => {
    expect(featuredProjects.map((project) => project.slug)).toEqual([
      'snaplink',
      'pertineo-ai-rookie',
      'filterify-april',
    ]);
  });

  it('keeps Snaplink grounded in verified outcomes, not inflated traction', () => {
    const snaplink = getProjectBySlug('snaplink');

    expect(snaplink?.metrics).toContain('2026년 2월 iOS·Android 앱 출시');
    expect(snaplink?.metrics).toContain('누적 회원가입자 약 120명');
    expect(snaplink?.metrics.join(' ')).toContain('실제 촬영 중개 및 예약 전환은 발생하지 않음');
  });

  it('marks Cooronite as additional rather than featured', () => {
    expect(featuredProjects.some((project) => project.slug === 'cooronite')).toBe(false);
  });
});

import { siteMeta, subpageDefinitions, topicDefinitions } from './topicMeta';
import {
  differentiationOutros,
  differentiationQuestions,
} from './topics/differentiation';
import {
  exponentialsTopicStripImages,
  exponentialsOutros,
  exponentialsQuestions,
} from './topics/exponentials';
import {
  integrationOutros,
  integrationQuestions,
} from './topics/integration';
import {
  rationalOutros,
  rationalQuestions,
} from './topics/rational';

const questionBanks = {
  'exponentials-and-logarithms': exponentialsQuestions,
  'rational-functions-and-transformations': rationalQuestions,
  differentiation: differentiationQuestions,
  integration: integrationQuestions,
};

const outroBanks = {
  'exponentials-and-logarithms': exponentialsOutros,
  'rational-functions-and-transformations': rationalOutros,
  differentiation: differentiationOutros,
  integration: integrationOutros,
};

const imageBanks = {
  'exponentials-and-logarithms': exponentialsTopicStripImages,
};

export const topics = topicDefinitions.map((topic) => ({
  ...topic,
  imageStripImages: imageBanks[topic.slug] ?? [],
  subpages: subpageDefinitions.map((subpage) => ({
    ...subpage,
    questions: questionBanks[topic.slug]?.[subpage.slug] ?? [],
    outro: outroBanks[topic.slug]?.[subpage.slug] ?? {
      title: `${subpage.label} complete`,
      summary: `You have finished ${subpage.label.toLowerCase()} for ${topic.title}.`,
      primaryTo: `/${topic.slug}`,
      primaryLabel: `Return to ${topic.shortLabel}`,
      secondaryTo: '/',
      secondaryLabel: 'Back to homepage',
    },
  })),
}));

export function getTopicBySlug(topicSlug) {
  return topics.find((topic) => topic.slug === topicSlug);
}

export function getSubpage(topicSlug, subpageSlug) {
  const topic = getTopicBySlug(topicSlug);
  if (!topic) return null;
  return topic.subpages.find((subpage) => subpage.slug === subpageSlug) ?? null;
}

export { siteMeta };
import { siteMeta, subpageDefinitions, topicDefinitions } from './topicMeta';
import * as differentiationTopic from './topics/differentiation';
import * as exponentialsTopic from './topics/exponentials';
import * as integrationTopic from './topics/integration';
import * as rationalTopic from './topics/rational';

const questionBanks = {
  'exponentials-and-logarithms': exponentialsTopic.exponentialsQuestions,
  'rational-functions-and-transformations': rationalTopic.rationalQuestions,
  differentiation: differentiationTopic.differentiationQuestions,
  integration: integrationTopic.integrationQuestions,
};

const introBanks = {
  'exponentials-and-logarithms': exponentialsTopic.exponentialsIntros,
  'rational-functions-and-transformations': rationalTopic.rationalIntros,
  differentiation: differentiationTopic.differentiationIntros,
  integration: integrationTopic.integrationIntros,
};

const outroBanks = {
  'exponentials-and-logarithms': exponentialsTopic.exponentialsOutros,
  'rational-functions-and-transformations': rationalTopic.rationalOutros,
  differentiation: differentiationTopic.differentiationOutros,
  integration: integrationTopic.integrationOutros,
};

const imageBanks = {
  'exponentials-and-logarithms': exponentialsTopic.exponentialsTopicStripImages,
  'rational-functions-and-transformations': rationalTopic.rationalTopicStripImages,
  differentiation: differentiationTopic.differentiationTopicStripImages,
  integration: integrationTopic.integrationTopicStripImages,
};

export const topics = topicDefinitions.map((topic) => ({
  ...topic,
  imageStripImages: imageBanks[topic.slug] ?? [],
  subpages: subpageDefinitions.map((subpage) => ({
    ...subpage,
    questions: questionBanks[topic.slug]?.[subpage.slug] ?? [],
    intro: introBanks[topic.slug]?.[subpage.slug] ?? {
      title: subpage.label,
      summary: `This section is for you to review your ${subpage.label.toLowerCase()} for ${topic.title}.`,
      primaryLabel: 'Start section',
    },
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
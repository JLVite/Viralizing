import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

export default {
  Query: {
    user(root, args, context) {
      const userID = context.userId || 'dzibKvJgaFFLskBZW';

      return Meteor.users.findOne(userID);
    }
  },
  User: {
    stripe: (user) => {
      let data = Meteor.call('stripe_customers_get', user);
      data.balance = data.account_balance;
      return data;
    },
    support: (user) => {
      return { ...user };
    },
    events: (user) => {
      let data = Meteor.call('mixpanel_events_user', user);
      return data.map((e) => ({
        id: e.distinct_id,
        name: e.name,
        created: new Date(e.time),
        properties: {
          browser: e.properties.$browser,
          url: e.properties.$current_url,
          referrer: e.properties.$initial_referrer
        }
      }));
    },
    paypal: (user) => {
      return user.paypal;
    }
  },
  StripeUser: {
    created: (user) => {
      return new Date(user.created * 1000);
    },
    defaultCard: (user) => {
      return user.sources.data.filter((s) => s.id === user.default_source)[0];
    },
    cards: (user) => {
      return user.sources.data.filter((s) => s.object === 'card');
    },
    banks: (user) => {
      return user.sources.data.filter((s) => s.object === 'bank_account').map((s) => ({
        name: s.account_holder_name,
        type: s.account_holder_type,
        bank: s.bank_name,
        country: s.country,
        currency: s.currency,
        id: s.id,
        last4: s.last4
      }));
    },
    subscriptions: (user) => {
      return user.subscriptions.data.map((s) => ({
        created: new Date(s.created * 1000),
        periodEnd: new Date(s.current_period_end * 1000),
        periodStart: new Date(s.current_period_start * 1000),
        id: s.id,
        quantity: s.quantity,
        startDate: new Date(s.start * 1000),
        trialStart: s.trial_end ? new Date(s.trial_end) : null,
        trialEnd: s.trial_start ? new Date(s.trial_start) : null,
        plans: s.items.data.map((i) => ({
          created: new Date(i.created * 1000),
          quantity: i.quantity,
          amount: i.plan.amount,
          currency: i.plan.currency,
          name: i.plan.name,
          interval: i.plan.interval,
          intervalCount: i.plan.interval_count
        }))
      }));
    },
    charges: (user) => {
      let charges = Meteor.call('stripe_charges_list', { customer: user.id, limit: 100 });
      return charges.data.map((c) => ({
        id: c.id,
        amount: c.amount,
        refunded: c.refunded,
        refundedAmount: c.amount_refunded,
        captured: c.captured,
        date: new Date(c.created * 1000),
        currency: c.currency,
        description: c.description,
        dispute: c.dispute,
        failureCode: c.failureCode,
        failureMessage: c.failure_message,
        paid: c.paid,
        status: c.status,
        invoice: c.invoice
      }));
    },
    invoices: (user) => {
      let invoices = Meteor.call('stripe_invoices_list', { customer: user.id, limit: 100 });
      return invoices.data.map((i) => ({
        id: i.id,
        amountDue: i.amount_due,
        attempts: i.attempt_count,
        nextAttempt: new Date(i.next_payment_attempt * 1000),
        charge: i.charge,
        closed: i.closed,
        currency: i.currency,
        date: new Date(i.date * 1000),
        description: i.description,
        discount: i.discount,
        startingBalance: i.starting_balance,
        endingBalance: i.ending_balance,
        forgive: i.forgiven,
        paid: i.paid,
        periodEnd: new Date(i.period_end * 1000),
        periodStart: new Date(i.period_start * 1000),
        subtotal: i.subtotal,
        tax: i.tax,
        taxPercent: i.tax_percent,
        total: i.total
      }));
    },
  },
  UserCoupon: {
    start: (coupon) => {
      return new Date(coupon.start * 1000);
    },
    end: (coupon) => {
      return new Date(coupon.end * 1000);
    },
  },
  UserSupport: {
    tickets: (user) => {
      let tickets = Meteor.call('zendesk_tickets_get_by_user', user);
      return tickets.map((t) => ({
        id: t.id,
        assignee: t.assignee_id,
        collaborators: t.collaborator_ids,
        created: new Date(t.created_at),
        updated: new Date(t.updated_at),
        priority: t.priority,
        requester: t.requester_id,
        satisfaction: t.satisfaction_rating,
        status: t.status,
        subject: t.subject,
        description: t.description,
        tags: t.tags,
        comments: []
      }));
    }
  },
  ZendeskTicket: {
    assignee: (ticket) => {
      let user = Meteor.call('zendesk_user_get', ticket.assignee);
      if (!user) {
        return null;
      }
      let u = user;
      return {
        id: u.id,
        email: u.email,
        name: u.name,
        role: u.role,
        created: new Date(u.created_at),
        updated: new Date(u.updated_at),
        tags: u.tags
      };
    },
    requester: (ticket) => {
      let user = Meteor.call('zendesk_user_get', ticket.requester);
      if (!user) {
        return null;
      }
      let u = user;
      return {
        id: u.id,
        email: u.email,
        name: u.name,
        role: u.role,
        created: new Date(u.created_at),
        updated: new Date(u.updated_at),
        tags: u.tags
      };
    },
    comments: (ticket) => {
      let comments = Meteor.call('zendesk_tickets_get_comments', ticket.id);
      return comments.comments.map((c) => ({
        id: c.id,
        author: c.author_id,
        body: c.body,
        channel: c.via.channel,
        created: new Date(c.created_at)
      }));
    }
  },
  ZendeskComment: {
    author: (comment) => {
      let user = Meteor.call('zendesk_user_get', comment.author);
      if (!user) {
        return null;
      }
      let u = user;
      return {
        id: u.id,
        email: u.email,
        name: u.name,
        role: u.role,
        created: new Date(u.created_at),
        updated: new Date(u.updated_at),
        tags: u.tags
      };
    }
  },
  StripeCharge: {
    invoice: (charge) => {
      if (!charge.invoice) {
        return null;
      }
      let i = Meteor.call('stripe_invoices_get', charge.invoice);

      return {
        id: i.id,
        amountDue: i.amount_due,
        attempts: i.attempt_count,
        nextAttempt: new Date(i.next_payment_attempt * 1000),
        charge: i.charge,
        closed: i.closed,
        currency: i.currency,
        date: new Date(i.date * 1000),
        description: i.description,
        discount: i.discount,
        startingBalance: i.starting_balance,
        endingBalance: i.ending_balance,
        forgive: i.forgiven,
        paid: i.paid,
        periodEnd: new Date(i.period_end * 1000),
        periodStart: new Date(i.period_start * 1000),
        subtotal: i.subtotal,
        tax: i.tax,
        taxPercent: i.tax_percent,
        total: i.total
      };
    },
  },
  StripeInvoice: {
    charge: (invoice) => {
      if (!invoice.charge) {
        return null;
      }
      let c = Meteor.call('stripe_charges_get', invoice.charge);
      return {
        id: c.id,
        amount: c.amount,
        refunded: c.refunded,
        refundedAmount: c.amount_refunded,
        captured: c.captured,
        date: new Date(c.created * 1000),
        currency: c.currency,
        description: c.description,
        dispute: c.dispute,
        failureCode: c.failureCode,
        failureMessage: c.failure_message,
        paid: c.paid,
        status: c.status,
        invoice: c.invoice
      };
    },
  }
};

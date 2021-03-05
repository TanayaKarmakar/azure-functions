module.exports = async function (context, myQueueItem) {
    context.log('JavaScript queue trigger function processed work item', myQueueItem);
    context.log('QueueItem ', myQueueItem.toString());
    context.bindings.myOutputBlob = myQueueItem;

};
var context = $evaluation.getContext();
var identity = context.getIdentity();
var permission = $evaluation.getPermission();

if (permission != null && permission.getResource().getOwner().equals(identity.getId())) {
	$evaluation.grant();
}

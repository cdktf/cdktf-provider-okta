# `userAdminRoles` Submodule <a name="`userAdminRoles` Submodule" id="@cdktf/provider-okta.userAdminRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserAdminRoles <a name="UserAdminRoles" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/user_admin_roles okta_user_admin_roles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_admin_roles.UserAdminRoles;

UserAdminRoles.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .adminRoles(java.util.List<java.lang.String>)
    .userId(java.lang.String)
//  .disableNotifications(java.lang.Boolean)
//  .disableNotifications(IResolvable)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.adminRoles">adminRoles</a></code> | <code>java.util.List<java.lang.String></code> | The list of Okta user admin roles, e.g. `['APP_ADMIN', 'USER_ADMIN']` See [API Docs](https://developer.okta.com/docs/reference/api/roles/#role-types). |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | ID of a Okta User. |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.disableNotifications">disableNotifications</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When this setting is enabled, the admins won't receive any of the default Okta administrator emails. |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/user_admin_roles#id UserAdminRoles#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminRoles`<sup>Required</sup> <a name="adminRoles" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.adminRoles"></a>

- *Type:* java.util.List<java.lang.String>

The list of Okta user admin roles, e.g. `['APP_ADMIN', 'USER_ADMIN']` See [API Docs](https://developer.okta.com/docs/reference/api/roles/#role-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/user_admin_roles#admin_roles UserAdminRoles#admin_roles}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

ID of a Okta User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/user_admin_roles#user_id UserAdminRoles#user_id}

---

##### `disableNotifications`<sup>Optional</sup> <a name="disableNotifications" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.disableNotifications"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When this setting is enabled, the admins won't receive any of the default Okta administrator emails.

These admins also won't have access to contact Okta Support and open support cases on behalf of your org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/user_admin_roles#disable_notifications UserAdminRoles#disable_notifications}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/user_admin_roles#id UserAdminRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.resetDisableNotifications">resetDisableNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDisableNotifications` <a name="resetDisableNotifications" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.resetDisableNotifications"></a>

```java
public void resetDisableNotifications()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a UserAdminRoles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_admin_roles.UserAdminRoles;

UserAdminRoles.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_admin_roles.UserAdminRoles;

UserAdminRoles.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_admin_roles.UserAdminRoles;

UserAdminRoles.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_admin_roles.UserAdminRoles;

UserAdminRoles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),UserAdminRoles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a UserAdminRoles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the UserAdminRoles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing UserAdminRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/user_admin_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the UserAdminRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.adminRolesInput">adminRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.disableNotificationsInput">disableNotificationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.adminRoles">adminRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.disableNotifications">disableNotifications</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminRolesInput`<sup>Optional</sup> <a name="adminRolesInput" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.adminRolesInput"></a>

```java
public java.util.List<java.lang.String> getAdminRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disableNotificationsInput`<sup>Optional</sup> <a name="disableNotificationsInput" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.disableNotificationsInput"></a>

```java
public java.lang.Object getDisableNotificationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `adminRoles`<sup>Required</sup> <a name="adminRoles" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.adminRoles"></a>

```java
public java.util.List<java.lang.String> getAdminRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disableNotifications`<sup>Required</sup> <a name="disableNotifications" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.disableNotifications"></a>

```java
public java.lang.Object getDisableNotifications();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.userAdminRoles.UserAdminRoles.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UserAdminRolesConfig <a name="UserAdminRolesConfig" id="@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_admin_roles.UserAdminRolesConfig;

UserAdminRolesConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .adminRoles(java.util.List<java.lang.String>)
    .userId(java.lang.String)
//  .disableNotifications(java.lang.Boolean)
//  .disableNotifications(IResolvable)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.adminRoles">adminRoles</a></code> | <code>java.util.List<java.lang.String></code> | The list of Okta user admin roles, e.g. `['APP_ADMIN', 'USER_ADMIN']` See [API Docs](https://developer.okta.com/docs/reference/api/roles/#role-types). |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | ID of a Okta User. |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.disableNotifications">disableNotifications</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When this setting is enabled, the admins won't receive any of the default Okta administrator emails. |
| <code><a href="#@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/user_admin_roles#id UserAdminRoles#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminRoles`<sup>Required</sup> <a name="adminRoles" id="@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.adminRoles"></a>

```java
public java.util.List<java.lang.String> getAdminRoles();
```

- *Type:* java.util.List<java.lang.String>

The list of Okta user admin roles, e.g. `['APP_ADMIN', 'USER_ADMIN']` See [API Docs](https://developer.okta.com/docs/reference/api/roles/#role-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/user_admin_roles#admin_roles UserAdminRoles#admin_roles}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

ID of a Okta User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/user_admin_roles#user_id UserAdminRoles#user_id}

---

##### `disableNotifications`<sup>Optional</sup> <a name="disableNotifications" id="@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.disableNotifications"></a>

```java
public java.lang.Object getDisableNotifications();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When this setting is enabled, the admins won't receive any of the default Okta administrator emails.

These admins also won't have access to contact Okta Support and open support cases on behalf of your org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/user_admin_roles#disable_notifications UserAdminRoles#disable_notifications}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.userAdminRoles.UserAdminRolesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/user_admin_roles#id UserAdminRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




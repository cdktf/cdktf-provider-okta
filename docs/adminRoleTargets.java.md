# `adminRoleTargets` Submodule <a name="`adminRoleTargets` Submodule" id="@cdktf/provider-okta.adminRoleTargets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdminRoleTargets <a name="AdminRoleTargets" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/admin_role_targets okta_admin_role_targets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.admin_role_targets.AdminRoleTargets;

AdminRoleTargets.Builder.create(Construct scope, java.lang.String id)
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
    .roleType(java.lang.String)
    .userId(java.lang.String)
//  .apps(java.util.List<java.lang.String>)
//  .groups(java.util.List<java.lang.String>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.roleType">roleType</a></code> | <code>java.lang.String</code> | Type of the role that is assigned to the user and supports optional targets. See [API Docs](https://developer.okta.com/docs/reference/api/roles/#role-types). |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | User associated with the role. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.apps">apps</a></code> | <code>java.util.List<java.lang.String></code> | List of app names (name represents set of app instances) or a combination of app name and app instance ID (like 'salesforce' or 'facebook.0oapsqQ6dv19pqyEo0g3'). |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | List of group IDs. Conflicts with apps. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/admin_role_targets#id AdminRoleTargets#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.roleType"></a>

- *Type:* java.lang.String

Type of the role that is assigned to the user and supports optional targets. See [API Docs](https://developer.okta.com/docs/reference/api/roles/#role-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/admin_role_targets#role_type AdminRoleTargets#role_type}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

User associated with the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/admin_role_targets#user_id AdminRoleTargets#user_id}

---

##### `apps`<sup>Optional</sup> <a name="apps" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.apps"></a>

- *Type:* java.util.List<java.lang.String>

List of app names (name represents set of app instances) or a combination of app name and app instance ID (like 'salesforce' or 'facebook.0oapsqQ6dv19pqyEo0g3').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/admin_role_targets#apps AdminRoleTargets#apps}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.groups"></a>

- *Type:* java.util.List<java.lang.String>

List of group IDs. Conflicts with apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/admin_role_targets#groups AdminRoleTargets#groups}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/admin_role_targets#id AdminRoleTargets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetApps">resetApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetApps` <a name="resetApps" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetApps"></a>

```java
public void resetApps()
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetGroups"></a>

```java
public void resetGroups()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AdminRoleTargets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.admin_role_targets.AdminRoleTargets;

AdminRoleTargets.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.admin_role_targets.AdminRoleTargets;

AdminRoleTargets.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.admin_role_targets.AdminRoleTargets;

AdminRoleTargets.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.admin_role_targets.AdminRoleTargets;

AdminRoleTargets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AdminRoleTargets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AdminRoleTargets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AdminRoleTargets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AdminRoleTargets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/admin_role_targets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AdminRoleTargets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.appsInput">appsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.groupsInput">groupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.roleTypeInput">roleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.apps">apps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.roleType">roleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

##### `appsInput`<sup>Optional</sup> <a name="appsInput" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.appsInput"></a>

```java
public java.util.List<java.lang.String> getAppsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.groupsInput"></a>

```java
public java.util.List<java.lang.String> getGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `roleTypeInput`<sup>Optional</sup> <a name="roleTypeInput" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.roleTypeInput"></a>

```java
public java.lang.String getRoleTypeInput();
```

- *Type:* java.lang.String

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.apps"></a>

```java
public java.util.List<java.lang.String> getApps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.roleType"></a>

```java
public java.lang.String getRoleType();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AdminRoleTargetsConfig <a name="AdminRoleTargetsConfig" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.admin_role_targets.AdminRoleTargetsConfig;

AdminRoleTargetsConfig.builder()
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
    .roleType(java.lang.String)
    .userId(java.lang.String)
//  .apps(java.util.List<java.lang.String>)
//  .groups(java.util.List<java.lang.String>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.roleType">roleType</a></code> | <code>java.lang.String</code> | Type of the role that is assigned to the user and supports optional targets. See [API Docs](https://developer.okta.com/docs/reference/api/roles/#role-types). |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | User associated with the role. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.apps">apps</a></code> | <code>java.util.List<java.lang.String></code> | List of app names (name represents set of app instances) or a combination of app name and app instance ID (like 'salesforce' or 'facebook.0oapsqQ6dv19pqyEo0g3'). |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | List of group IDs. Conflicts with apps. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/admin_role_targets#id AdminRoleTargets#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.roleType"></a>

```java
public java.lang.String getRoleType();
```

- *Type:* java.lang.String

Type of the role that is assigned to the user and supports optional targets. See [API Docs](https://developer.okta.com/docs/reference/api/roles/#role-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/admin_role_targets#role_type AdminRoleTargets#role_type}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

User associated with the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/admin_role_targets#user_id AdminRoleTargets#user_id}

---

##### `apps`<sup>Optional</sup> <a name="apps" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.apps"></a>

```java
public java.util.List<java.lang.String> getApps();
```

- *Type:* java.util.List<java.lang.String>

List of app names (name represents set of app instances) or a combination of app name and app instance ID (like 'salesforce' or 'facebook.0oapsqQ6dv19pqyEo0g3').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/admin_role_targets#apps AdminRoleTargets#apps}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

List of group IDs. Conflicts with apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/admin_role_targets#groups AdminRoleTargets#groups}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.8.1/docs/resources/admin_role_targets#id AdminRoleTargets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




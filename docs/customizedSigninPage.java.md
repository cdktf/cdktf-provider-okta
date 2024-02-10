# `customizedSigninPage` Submodule <a name="`customizedSigninPage` Submodule" id="@cdktf/provider-okta.customizedSigninPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomizedSigninPage <a name="CustomizedSigninPage" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page okta_customized_signin_page}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.customized_signin_page.CustomizedSigninPage;

CustomizedSigninPage.Builder.create(Construct scope, java.lang.String id)
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
    .brandId(java.lang.String)
    .pageContent(java.lang.String)
    .widgetVersion(java.lang.String)
//  .contentSecurityPolicySetting(CustomizedSigninPageContentSecurityPolicySetting)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.brandId">brandId</a></code> | <code>java.lang.String</code> | brand id of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.pageContent">pageContent</a></code> | <code>java.lang.String</code> | page content of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.widgetVersion">widgetVersion</a></code> | <code>java.lang.String</code> | widget version specified as a Semver. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.contentSecurityPolicySetting">contentSecurityPolicySetting</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a></code> | content_security_policy_setting block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.brandId"></a>

- *Type:* java.lang.String

brand id of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#brand_id CustomizedSigninPage#brand_id}

---

##### `pageContent`<sup>Required</sup> <a name="pageContent" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.pageContent"></a>

- *Type:* java.lang.String

page content of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#page_content CustomizedSigninPage#page_content}

---

##### `widgetVersion`<sup>Required</sup> <a name="widgetVersion" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.widgetVersion"></a>

- *Type:* java.lang.String

widget version specified as a Semver.

The following are currently supported
*, ^1, ^2, ^3, ^4, ^5, ^6, ^7, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.1, 2.2, 2.3, 2.4,
2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 2.12, 2.13, 2.14, 2.15, 2.16, 2.17, 2.18, 2.19, 2.20, 2.21,
3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 5.0, 5.1, 5.2, 5.3,
5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11, 5.12, 5.13, 5.14, 5.15, 5.16, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5,
6.6, 6.7, 6.8, 6.9, 7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.10, 7.11, 7.12, 7.13.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#widget_version CustomizedSigninPage#widget_version}

---

##### `contentSecurityPolicySetting`<sup>Optional</sup> <a name="contentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.contentSecurityPolicySetting"></a>

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>

content_security_policy_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#content_security_policy_setting CustomizedSigninPage#content_security_policy_setting}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting">putContentSecurityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetContentSecurityPolicySetting">resetContentSecurityPolicySetting</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContentSecurityPolicySetting` <a name="putContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting"></a>

```java
public void putContentSecurityPolicySetting(CustomizedSigninPageContentSecurityPolicySetting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>

---

##### `resetContentSecurityPolicySetting` <a name="resetContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetContentSecurityPolicySetting"></a>

```java
public void resetContentSecurityPolicySetting()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CustomizedSigninPage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.customized_signin_page.CustomizedSigninPage;

CustomizedSigninPage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.customized_signin_page.CustomizedSigninPage;

CustomizedSigninPage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.customized_signin_page.CustomizedSigninPage;

CustomizedSigninPage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.customized_signin_page.CustomizedSigninPage;

CustomizedSigninPage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CustomizedSigninPage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CustomizedSigninPage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CustomizedSigninPage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CustomizedSigninPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CustomizedSigninPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySetting">contentSecurityPolicySetting</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference">CustomizedSigninPageContentSecurityPolicySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizations">widgetCustomizations</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference">CustomizedSigninPageWidgetCustomizationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandIdInput">brandIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySettingInput">contentSecurityPolicySettingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContentInput">pageContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersionInput">widgetVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandId">brandId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContent">pageContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersion">widgetVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contentSecurityPolicySetting`<sup>Required</sup> <a name="contentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySetting"></a>

```java
public CustomizedSigninPageContentSecurityPolicySettingOutputReference getContentSecurityPolicySetting();
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference">CustomizedSigninPageContentSecurityPolicySettingOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `widgetCustomizations`<sup>Required</sup> <a name="widgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizations"></a>

```java
public CustomizedSigninPageWidgetCustomizationsOutputReference getWidgetCustomizations();
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference">CustomizedSigninPageWidgetCustomizationsOutputReference</a>

---

##### `brandIdInput`<sup>Optional</sup> <a name="brandIdInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandIdInput"></a>

```java
public java.lang.String getBrandIdInput();
```

- *Type:* java.lang.String

---

##### `contentSecurityPolicySettingInput`<sup>Optional</sup> <a name="contentSecurityPolicySettingInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySettingInput"></a>

```java
public java.lang.Object getContentSecurityPolicySettingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>

---

##### `pageContentInput`<sup>Optional</sup> <a name="pageContentInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContentInput"></a>

```java
public java.lang.String getPageContentInput();
```

- *Type:* java.lang.String

---

##### `widgetVersionInput`<sup>Optional</sup> <a name="widgetVersionInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersionInput"></a>

```java
public java.lang.String getWidgetVersionInput();
```

- *Type:* java.lang.String

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandId"></a>

```java
public java.lang.String getBrandId();
```

- *Type:* java.lang.String

---

##### `pageContent`<sup>Required</sup> <a name="pageContent" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContent"></a>

```java
public java.lang.String getPageContent();
```

- *Type:* java.lang.String

---

##### `widgetVersion`<sup>Required</sup> <a name="widgetVersion" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersion"></a>

```java
public java.lang.String getWidgetVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CustomizedSigninPageConfig <a name="CustomizedSigninPageConfig" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.customized_signin_page.CustomizedSigninPageConfig;

CustomizedSigninPageConfig.builder()
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
    .brandId(java.lang.String)
    .pageContent(java.lang.String)
    .widgetVersion(java.lang.String)
//  .contentSecurityPolicySetting(CustomizedSigninPageContentSecurityPolicySetting)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.brandId">brandId</a></code> | <code>java.lang.String</code> | brand id of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.pageContent">pageContent</a></code> | <code>java.lang.String</code> | page content of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetVersion">widgetVersion</a></code> | <code>java.lang.String</code> | widget version specified as a Semver. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.contentSecurityPolicySetting">contentSecurityPolicySetting</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a></code> | content_security_policy_setting block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.brandId"></a>

```java
public java.lang.String getBrandId();
```

- *Type:* java.lang.String

brand id of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#brand_id CustomizedSigninPage#brand_id}

---

##### `pageContent`<sup>Required</sup> <a name="pageContent" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.pageContent"></a>

```java
public java.lang.String getPageContent();
```

- *Type:* java.lang.String

page content of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#page_content CustomizedSigninPage#page_content}

---

##### `widgetVersion`<sup>Required</sup> <a name="widgetVersion" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetVersion"></a>

```java
public java.lang.String getWidgetVersion();
```

- *Type:* java.lang.String

widget version specified as a Semver.

The following are currently supported
*, ^1, ^2, ^3, ^4, ^5, ^6, ^7, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.1, 2.2, 2.3, 2.4,
2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 2.12, 2.13, 2.14, 2.15, 2.16, 2.17, 2.18, 2.19, 2.20, 2.21,
3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 5.0, 5.1, 5.2, 5.3,
5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11, 5.12, 5.13, 5.14, 5.15, 5.16, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5,
6.6, 6.7, 6.8, 6.9, 7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.10, 7.11, 7.12, 7.13.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#widget_version CustomizedSigninPage#widget_version}

---

##### `contentSecurityPolicySetting`<sup>Optional</sup> <a name="contentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.contentSecurityPolicySetting"></a>

```java
public CustomizedSigninPageContentSecurityPolicySetting getContentSecurityPolicySetting();
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>

content_security_policy_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#content_security_policy_setting CustomizedSigninPage#content_security_policy_setting}

---

### CustomizedSigninPageContentSecurityPolicySetting <a name="CustomizedSigninPageContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.customized_signin_page.CustomizedSigninPageContentSecurityPolicySetting;

CustomizedSigninPageContentSecurityPolicySetting.builder()
//  .mode(java.lang.String)
//  .reportUri(java.lang.String)
//  .srcList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.mode">mode</a></code> | <code>java.lang.String</code> | enforced or report_only. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.reportUri">reportUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#report_uri CustomizedSigninPage#report_uri}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.srcList">srcList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#src_list CustomizedSigninPage#src_list}. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

enforced or report_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#mode CustomizedSigninPage#mode}

---

##### `reportUri`<sup>Optional</sup> <a name="reportUri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.reportUri"></a>

```java
public java.lang.String getReportUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#report_uri CustomizedSigninPage#report_uri}.

---

##### `srcList`<sup>Optional</sup> <a name="srcList" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.srcList"></a>

```java
public java.util.List<java.lang.String> getSrcList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#src_list CustomizedSigninPage#src_list}.

---

### CustomizedSigninPageWidgetCustomizations <a name="CustomizedSigninPageWidgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.customized_signin_page.CustomizedSigninPageWidgetCustomizations;

CustomizedSigninPageWidgetCustomizations.builder()
    .widgetGeneration(java.lang.String)
//  .authenticatorPageCustomLinkLabel(java.lang.String)
//  .authenticatorPageCustomLinkUrl(java.lang.String)
//  .classicRecoveryFlowEmailOrUsernameLabel(java.lang.String)
//  .customLink1Label(java.lang.String)
//  .customLink1Url(java.lang.String)
//  .customLink2Label(java.lang.String)
//  .customLink2Url(java.lang.String)
//  .forgotPasswordLabel(java.lang.String)
//  .forgotPasswordUrl(java.lang.String)
//  .helpLabel(java.lang.String)
//  .helpUrl(java.lang.String)
//  .passwordInfoTip(java.lang.String)
//  .passwordLabel(java.lang.String)
//  .showPasswordVisibilityToggle(java.lang.Boolean)
//  .showPasswordVisibilityToggle(IResolvable)
//  .showUserIdentifier(java.lang.Boolean)
//  .showUserIdentifier(IResolvable)
//  .signInLabel(java.lang.String)
//  .unlockAccountLabel(java.lang.String)
//  .unlockAccountUrl(java.lang.String)
//  .usernameInfoTip(java.lang.String)
//  .usernameLabel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.widgetGeneration">widgetGeneration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#widget_generation CustomizedSigninPage#widget_generation}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkLabel">authenticatorPageCustomLinkLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#authenticator_page_custom_link_label CustomizedSigninPage#authenticator_page_custom_link_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkUrl">authenticatorPageCustomLinkUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#authenticator_page_custom_link_url CustomizedSigninPage#authenticator_page_custom_link_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.classicRecoveryFlowEmailOrUsernameLabel">classicRecoveryFlowEmailOrUsernameLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#classic_recovery_flow_email_or_username_label CustomizedSigninPage#classic_recovery_flow_email_or_username_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Label">customLink1Label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#custom_link_1_label CustomizedSigninPage#custom_link_1_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Url">customLink1Url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#custom_link_1_url CustomizedSigninPage#custom_link_1_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Label">customLink2Label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#custom_link_2_label CustomizedSigninPage#custom_link_2_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Url">customLink2Url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#custom_link_2_url CustomizedSigninPage#custom_link_2_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordLabel">forgotPasswordLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#forgot_password_label CustomizedSigninPage#forgot_password_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordUrl">forgotPasswordUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#forgot_password_url CustomizedSigninPage#forgot_password_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpLabel">helpLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#help_label CustomizedSigninPage#help_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpUrl">helpUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#help_url CustomizedSigninPage#help_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordInfoTip">passwordInfoTip</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#password_info_tip CustomizedSigninPage#password_info_tip}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordLabel">passwordLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#password_label CustomizedSigninPage#password_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showPasswordVisibilityToggle">showPasswordVisibilityToggle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#show_password_visibility_toggle CustomizedSigninPage#show_password_visibility_toggle}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showUserIdentifier">showUserIdentifier</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#show_user_identifier CustomizedSigninPage#show_user_identifier}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.signInLabel">signInLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#sign_in_label CustomizedSigninPage#sign_in_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountLabel">unlockAccountLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#unlock_account_label CustomizedSigninPage#unlock_account_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountUrl">unlockAccountUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#unlock_account_url CustomizedSigninPage#unlock_account_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameInfoTip">usernameInfoTip</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#username_info_tip CustomizedSigninPage#username_info_tip}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameLabel">usernameLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#username_label CustomizedSigninPage#username_label}. |

---

##### `widgetGeneration`<sup>Required</sup> <a name="widgetGeneration" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.widgetGeneration"></a>

```java
public java.lang.String getWidgetGeneration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#widget_generation CustomizedSigninPage#widget_generation}.

---

##### `authenticatorPageCustomLinkLabel`<sup>Optional</sup> <a name="authenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkLabel"></a>

```java
public java.lang.String getAuthenticatorPageCustomLinkLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#authenticator_page_custom_link_label CustomizedSigninPage#authenticator_page_custom_link_label}.

---

##### `authenticatorPageCustomLinkUrl`<sup>Optional</sup> <a name="authenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkUrl"></a>

```java
public java.lang.String getAuthenticatorPageCustomLinkUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#authenticator_page_custom_link_url CustomizedSigninPage#authenticator_page_custom_link_url}.

---

##### `classicRecoveryFlowEmailOrUsernameLabel`<sup>Optional</sup> <a name="classicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.classicRecoveryFlowEmailOrUsernameLabel"></a>

```java
public java.lang.String getClassicRecoveryFlowEmailOrUsernameLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#classic_recovery_flow_email_or_username_label CustomizedSigninPage#classic_recovery_flow_email_or_username_label}.

---

##### `customLink1Label`<sup>Optional</sup> <a name="customLink1Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Label"></a>

```java
public java.lang.String getCustomLink1Label();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#custom_link_1_label CustomizedSigninPage#custom_link_1_label}.

---

##### `customLink1Url`<sup>Optional</sup> <a name="customLink1Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Url"></a>

```java
public java.lang.String getCustomLink1Url();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#custom_link_1_url CustomizedSigninPage#custom_link_1_url}.

---

##### `customLink2Label`<sup>Optional</sup> <a name="customLink2Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Label"></a>

```java
public java.lang.String getCustomLink2Label();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#custom_link_2_label CustomizedSigninPage#custom_link_2_label}.

---

##### `customLink2Url`<sup>Optional</sup> <a name="customLink2Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Url"></a>

```java
public java.lang.String getCustomLink2Url();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#custom_link_2_url CustomizedSigninPage#custom_link_2_url}.

---

##### `forgotPasswordLabel`<sup>Optional</sup> <a name="forgotPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordLabel"></a>

```java
public java.lang.String getForgotPasswordLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#forgot_password_label CustomizedSigninPage#forgot_password_label}.

---

##### `forgotPasswordUrl`<sup>Optional</sup> <a name="forgotPasswordUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordUrl"></a>

```java
public java.lang.String getForgotPasswordUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#forgot_password_url CustomizedSigninPage#forgot_password_url}.

---

##### `helpLabel`<sup>Optional</sup> <a name="helpLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpLabel"></a>

```java
public java.lang.String getHelpLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#help_label CustomizedSigninPage#help_label}.

---

##### `helpUrl`<sup>Optional</sup> <a name="helpUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpUrl"></a>

```java
public java.lang.String getHelpUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#help_url CustomizedSigninPage#help_url}.

---

##### `passwordInfoTip`<sup>Optional</sup> <a name="passwordInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordInfoTip"></a>

```java
public java.lang.String getPasswordInfoTip();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#password_info_tip CustomizedSigninPage#password_info_tip}.

---

##### `passwordLabel`<sup>Optional</sup> <a name="passwordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordLabel"></a>

```java
public java.lang.String getPasswordLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#password_label CustomizedSigninPage#password_label}.

---

##### `showPasswordVisibilityToggle`<sup>Optional</sup> <a name="showPasswordVisibilityToggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showPasswordVisibilityToggle"></a>

```java
public java.lang.Object getShowPasswordVisibilityToggle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#show_password_visibility_toggle CustomizedSigninPage#show_password_visibility_toggle}.

---

##### `showUserIdentifier`<sup>Optional</sup> <a name="showUserIdentifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showUserIdentifier"></a>

```java
public java.lang.Object getShowUserIdentifier();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#show_user_identifier CustomizedSigninPage#show_user_identifier}.

---

##### `signInLabel`<sup>Optional</sup> <a name="signInLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.signInLabel"></a>

```java
public java.lang.String getSignInLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#sign_in_label CustomizedSigninPage#sign_in_label}.

---

##### `unlockAccountLabel`<sup>Optional</sup> <a name="unlockAccountLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountLabel"></a>

```java
public java.lang.String getUnlockAccountLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#unlock_account_label CustomizedSigninPage#unlock_account_label}.

---

##### `unlockAccountUrl`<sup>Optional</sup> <a name="unlockAccountUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountUrl"></a>

```java
public java.lang.String getUnlockAccountUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#unlock_account_url CustomizedSigninPage#unlock_account_url}.

---

##### `usernameInfoTip`<sup>Optional</sup> <a name="usernameInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameInfoTip"></a>

```java
public java.lang.String getUsernameInfoTip();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#username_info_tip CustomizedSigninPage#username_info_tip}.

---

##### `usernameLabel`<sup>Optional</sup> <a name="usernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameLabel"></a>

```java
public java.lang.String getUsernameLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/customized_signin_page#username_label CustomizedSigninPage#username_label}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomizedSigninPageContentSecurityPolicySettingOutputReference <a name="CustomizedSigninPageContentSecurityPolicySettingOutputReference" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.customized_signin_page.CustomizedSigninPageContentSecurityPolicySettingOutputReference;

new CustomizedSigninPageContentSecurityPolicySettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetReportUri">resetReportUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetSrcList">resetSrcList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetReportUri` <a name="resetReportUri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetReportUri"></a>

```java
public void resetReportUri()
```

##### `resetSrcList` <a name="resetSrcList" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetSrcList"></a>

```java
public void resetSrcList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUriInput">reportUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcListInput">srcListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUri">reportUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcList">srcList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `reportUriInput`<sup>Optional</sup> <a name="reportUriInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUriInput"></a>

```java
public java.lang.String getReportUriInput();
```

- *Type:* java.lang.String

---

##### `srcListInput`<sup>Optional</sup> <a name="srcListInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcListInput"></a>

```java
public java.util.List<java.lang.String> getSrcListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `reportUri`<sup>Required</sup> <a name="reportUri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUri"></a>

```java
public java.lang.String getReportUri();
```

- *Type:* java.lang.String

---

##### `srcList`<sup>Required</sup> <a name="srcList" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcList"></a>

```java
public java.util.List<java.lang.String> getSrcList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>

---


### CustomizedSigninPageWidgetCustomizationsOutputReference <a name="CustomizedSigninPageWidgetCustomizationsOutputReference" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.customized_signin_page.CustomizedSigninPageWidgetCustomizationsOutputReference;

new CustomizedSigninPageWidgetCustomizationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkLabel">resetAuthenticatorPageCustomLinkLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkUrl">resetAuthenticatorPageCustomLinkUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetClassicRecoveryFlowEmailOrUsernameLabel">resetClassicRecoveryFlowEmailOrUsernameLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Label">resetCustomLink1Label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Url">resetCustomLink1Url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Label">resetCustomLink2Label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Url">resetCustomLink2Url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordLabel">resetForgotPasswordLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordUrl">resetForgotPasswordUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpLabel">resetHelpLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpUrl">resetHelpUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordInfoTip">resetPasswordInfoTip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordLabel">resetPasswordLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowPasswordVisibilityToggle">resetShowPasswordVisibilityToggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowUserIdentifier">resetShowUserIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetSignInLabel">resetSignInLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountLabel">resetUnlockAccountLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountUrl">resetUnlockAccountUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameInfoTip">resetUsernameInfoTip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameLabel">resetUsernameLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticatorPageCustomLinkLabel` <a name="resetAuthenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkLabel"></a>

```java
public void resetAuthenticatorPageCustomLinkLabel()
```

##### `resetAuthenticatorPageCustomLinkUrl` <a name="resetAuthenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkUrl"></a>

```java
public void resetAuthenticatorPageCustomLinkUrl()
```

##### `resetClassicRecoveryFlowEmailOrUsernameLabel` <a name="resetClassicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetClassicRecoveryFlowEmailOrUsernameLabel"></a>

```java
public void resetClassicRecoveryFlowEmailOrUsernameLabel()
```

##### `resetCustomLink1Label` <a name="resetCustomLink1Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Label"></a>

```java
public void resetCustomLink1Label()
```

##### `resetCustomLink1Url` <a name="resetCustomLink1Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Url"></a>

```java
public void resetCustomLink1Url()
```

##### `resetCustomLink2Label` <a name="resetCustomLink2Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Label"></a>

```java
public void resetCustomLink2Label()
```

##### `resetCustomLink2Url` <a name="resetCustomLink2Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Url"></a>

```java
public void resetCustomLink2Url()
```

##### `resetForgotPasswordLabel` <a name="resetForgotPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordLabel"></a>

```java
public void resetForgotPasswordLabel()
```

##### `resetForgotPasswordUrl` <a name="resetForgotPasswordUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordUrl"></a>

```java
public void resetForgotPasswordUrl()
```

##### `resetHelpLabel` <a name="resetHelpLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpLabel"></a>

```java
public void resetHelpLabel()
```

##### `resetHelpUrl` <a name="resetHelpUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpUrl"></a>

```java
public void resetHelpUrl()
```

##### `resetPasswordInfoTip` <a name="resetPasswordInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordInfoTip"></a>

```java
public void resetPasswordInfoTip()
```

##### `resetPasswordLabel` <a name="resetPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordLabel"></a>

```java
public void resetPasswordLabel()
```

##### `resetShowPasswordVisibilityToggle` <a name="resetShowPasswordVisibilityToggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowPasswordVisibilityToggle"></a>

```java
public void resetShowPasswordVisibilityToggle()
```

##### `resetShowUserIdentifier` <a name="resetShowUserIdentifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowUserIdentifier"></a>

```java
public void resetShowUserIdentifier()
```

##### `resetSignInLabel` <a name="resetSignInLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetSignInLabel"></a>

```java
public void resetSignInLabel()
```

##### `resetUnlockAccountLabel` <a name="resetUnlockAccountLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountLabel"></a>

```java
public void resetUnlockAccountLabel()
```

##### `resetUnlockAccountUrl` <a name="resetUnlockAccountUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountUrl"></a>

```java
public void resetUnlockAccountUrl()
```

##### `resetUsernameInfoTip` <a name="resetUsernameInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameInfoTip"></a>

```java
public void resetUsernameInfoTip()
```

##### `resetUsernameLabel` <a name="resetUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameLabel"></a>

```java
public void resetUsernameLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabelInput">authenticatorPageCustomLinkLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrlInput">authenticatorPageCustomLinkUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabelInput">classicRecoveryFlowEmailOrUsernameLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1LabelInput">customLink1LabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1UrlInput">customLink1UrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2LabelInput">customLink2LabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2UrlInput">customLink2UrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabelInput">forgotPasswordLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrlInput">forgotPasswordUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabelInput">helpLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrlInput">helpUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTipInput">passwordInfoTipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabelInput">passwordLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggleInput">showPasswordVisibilityToggleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifierInput">showUserIdentifierInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabelInput">signInLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabelInput">unlockAccountLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrlInput">unlockAccountUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTipInput">usernameInfoTipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabelInput">usernameLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGenerationInput">widgetGenerationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel">authenticatorPageCustomLinkLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl">authenticatorPageCustomLinkUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel">classicRecoveryFlowEmailOrUsernameLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Label">customLink1Label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Url">customLink1Url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Label">customLink2Label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Url">customLink2Url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel">forgotPasswordLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl">forgotPasswordUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabel">helpLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrl">helpUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip">passwordInfoTip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabel">passwordLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle">showPasswordVisibilityToggle</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier">showUserIdentifier</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabel">signInLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel">unlockAccountLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl">unlockAccountUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip">usernameInfoTip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabel">usernameLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration">widgetGeneration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticatorPageCustomLinkLabelInput`<sup>Optional</sup> <a name="authenticatorPageCustomLinkLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabelInput"></a>

```java
public java.lang.String getAuthenticatorPageCustomLinkLabelInput();
```

- *Type:* java.lang.String

---

##### `authenticatorPageCustomLinkUrlInput`<sup>Optional</sup> <a name="authenticatorPageCustomLinkUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrlInput"></a>

```java
public java.lang.String getAuthenticatorPageCustomLinkUrlInput();
```

- *Type:* java.lang.String

---

##### `classicRecoveryFlowEmailOrUsernameLabelInput`<sup>Optional</sup> <a name="classicRecoveryFlowEmailOrUsernameLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabelInput"></a>

```java
public java.lang.String getClassicRecoveryFlowEmailOrUsernameLabelInput();
```

- *Type:* java.lang.String

---

##### `customLink1LabelInput`<sup>Optional</sup> <a name="customLink1LabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1LabelInput"></a>

```java
public java.lang.String getCustomLink1LabelInput();
```

- *Type:* java.lang.String

---

##### `customLink1UrlInput`<sup>Optional</sup> <a name="customLink1UrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1UrlInput"></a>

```java
public java.lang.String getCustomLink1UrlInput();
```

- *Type:* java.lang.String

---

##### `customLink2LabelInput`<sup>Optional</sup> <a name="customLink2LabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2LabelInput"></a>

```java
public java.lang.String getCustomLink2LabelInput();
```

- *Type:* java.lang.String

---

##### `customLink2UrlInput`<sup>Optional</sup> <a name="customLink2UrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2UrlInput"></a>

```java
public java.lang.String getCustomLink2UrlInput();
```

- *Type:* java.lang.String

---

##### `forgotPasswordLabelInput`<sup>Optional</sup> <a name="forgotPasswordLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabelInput"></a>

```java
public java.lang.String getForgotPasswordLabelInput();
```

- *Type:* java.lang.String

---

##### `forgotPasswordUrlInput`<sup>Optional</sup> <a name="forgotPasswordUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrlInput"></a>

```java
public java.lang.String getForgotPasswordUrlInput();
```

- *Type:* java.lang.String

---

##### `helpLabelInput`<sup>Optional</sup> <a name="helpLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabelInput"></a>

```java
public java.lang.String getHelpLabelInput();
```

- *Type:* java.lang.String

---

##### `helpUrlInput`<sup>Optional</sup> <a name="helpUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrlInput"></a>

```java
public java.lang.String getHelpUrlInput();
```

- *Type:* java.lang.String

---

##### `passwordInfoTipInput`<sup>Optional</sup> <a name="passwordInfoTipInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTipInput"></a>

```java
public java.lang.String getPasswordInfoTipInput();
```

- *Type:* java.lang.String

---

##### `passwordLabelInput`<sup>Optional</sup> <a name="passwordLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabelInput"></a>

```java
public java.lang.String getPasswordLabelInput();
```

- *Type:* java.lang.String

---

##### `showPasswordVisibilityToggleInput`<sup>Optional</sup> <a name="showPasswordVisibilityToggleInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggleInput"></a>

```java
public java.lang.Object getShowPasswordVisibilityToggleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `showUserIdentifierInput`<sup>Optional</sup> <a name="showUserIdentifierInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifierInput"></a>

```java
public java.lang.Object getShowUserIdentifierInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `signInLabelInput`<sup>Optional</sup> <a name="signInLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabelInput"></a>

```java
public java.lang.String getSignInLabelInput();
```

- *Type:* java.lang.String

---

##### `unlockAccountLabelInput`<sup>Optional</sup> <a name="unlockAccountLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabelInput"></a>

```java
public java.lang.String getUnlockAccountLabelInput();
```

- *Type:* java.lang.String

---

##### `unlockAccountUrlInput`<sup>Optional</sup> <a name="unlockAccountUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrlInput"></a>

```java
public java.lang.String getUnlockAccountUrlInput();
```

- *Type:* java.lang.String

---

##### `usernameInfoTipInput`<sup>Optional</sup> <a name="usernameInfoTipInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTipInput"></a>

```java
public java.lang.String getUsernameInfoTipInput();
```

- *Type:* java.lang.String

---

##### `usernameLabelInput`<sup>Optional</sup> <a name="usernameLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabelInput"></a>

```java
public java.lang.String getUsernameLabelInput();
```

- *Type:* java.lang.String

---

##### `widgetGenerationInput`<sup>Optional</sup> <a name="widgetGenerationInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGenerationInput"></a>

```java
public java.lang.String getWidgetGenerationInput();
```

- *Type:* java.lang.String

---

##### `authenticatorPageCustomLinkLabel`<sup>Required</sup> <a name="authenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel"></a>

```java
public java.lang.String getAuthenticatorPageCustomLinkLabel();
```

- *Type:* java.lang.String

---

##### `authenticatorPageCustomLinkUrl`<sup>Required</sup> <a name="authenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl"></a>

```java
public java.lang.String getAuthenticatorPageCustomLinkUrl();
```

- *Type:* java.lang.String

---

##### `classicRecoveryFlowEmailOrUsernameLabel`<sup>Required</sup> <a name="classicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel"></a>

```java
public java.lang.String getClassicRecoveryFlowEmailOrUsernameLabel();
```

- *Type:* java.lang.String

---

##### `customLink1Label`<sup>Required</sup> <a name="customLink1Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Label"></a>

```java
public java.lang.String getCustomLink1Label();
```

- *Type:* java.lang.String

---

##### `customLink1Url`<sup>Required</sup> <a name="customLink1Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Url"></a>

```java
public java.lang.String getCustomLink1Url();
```

- *Type:* java.lang.String

---

##### `customLink2Label`<sup>Required</sup> <a name="customLink2Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Label"></a>

```java
public java.lang.String getCustomLink2Label();
```

- *Type:* java.lang.String

---

##### `customLink2Url`<sup>Required</sup> <a name="customLink2Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Url"></a>

```java
public java.lang.String getCustomLink2Url();
```

- *Type:* java.lang.String

---

##### `forgotPasswordLabel`<sup>Required</sup> <a name="forgotPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel"></a>

```java
public java.lang.String getForgotPasswordLabel();
```

- *Type:* java.lang.String

---

##### `forgotPasswordUrl`<sup>Required</sup> <a name="forgotPasswordUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl"></a>

```java
public java.lang.String getForgotPasswordUrl();
```

- *Type:* java.lang.String

---

##### `helpLabel`<sup>Required</sup> <a name="helpLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabel"></a>

```java
public java.lang.String getHelpLabel();
```

- *Type:* java.lang.String

---

##### `helpUrl`<sup>Required</sup> <a name="helpUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrl"></a>

```java
public java.lang.String getHelpUrl();
```

- *Type:* java.lang.String

---

##### `passwordInfoTip`<sup>Required</sup> <a name="passwordInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip"></a>

```java
public java.lang.String getPasswordInfoTip();
```

- *Type:* java.lang.String

---

##### `passwordLabel`<sup>Required</sup> <a name="passwordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabel"></a>

```java
public java.lang.String getPasswordLabel();
```

- *Type:* java.lang.String

---

##### `showPasswordVisibilityToggle`<sup>Required</sup> <a name="showPasswordVisibilityToggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle"></a>

```java
public java.lang.Object getShowPasswordVisibilityToggle();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `showUserIdentifier`<sup>Required</sup> <a name="showUserIdentifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier"></a>

```java
public java.lang.Object getShowUserIdentifier();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `signInLabel`<sup>Required</sup> <a name="signInLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabel"></a>

```java
public java.lang.String getSignInLabel();
```

- *Type:* java.lang.String

---

##### `unlockAccountLabel`<sup>Required</sup> <a name="unlockAccountLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel"></a>

```java
public java.lang.String getUnlockAccountLabel();
```

- *Type:* java.lang.String

---

##### `unlockAccountUrl`<sup>Required</sup> <a name="unlockAccountUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl"></a>

```java
public java.lang.String getUnlockAccountUrl();
```

- *Type:* java.lang.String

---

##### `usernameInfoTip`<sup>Required</sup> <a name="usernameInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip"></a>

```java
public java.lang.String getUsernameInfoTip();
```

- *Type:* java.lang.String

---

##### `usernameLabel`<sup>Required</sup> <a name="usernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabel"></a>

```java
public java.lang.String getUsernameLabel();
```

- *Type:* java.lang.String

---

##### `widgetGeneration`<sup>Required</sup> <a name="widgetGeneration" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration"></a>

```java
public java.lang.String getWidgetGeneration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a>

---



